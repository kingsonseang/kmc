# =========================
# BASE IMAGE
# =========================
FROM node:20-alpine AS base

# Install libc6-compat for compatibility and manually install PNPM
RUN apk add --no-cache libc6-compat curl \
    && npm install -g pnpm

# =========================
# DEPENDENCIES STAGE
# =========================
FROM base AS deps

WORKDIR /app

# Copy package.json and lock files for dependency installation
COPY package.json pnpm-lock.yaml ./

# Install all dependencies
RUN pnpm install --frozen-lockfile

# =========================
# BUILD STAGE
# =========================
FROM base AS builder

WORKDIR /app

# Copy node_modules from the deps stage
COPY --from=deps /app/node_modules ./node_modules

# Copy the application source code
COPY . .

# Define build-time arguments (e.g., API keys, environment URLs, etc.)
ARG BASE_URL

# Set environment variables for the build stage
ENV BASE_URL=$BASE_URL

# Run the build command
RUN pnpm run build

# =========================
# FINAL PRODUCTION IMAGE
# =========================
FROM node:20-alpine AS runner

# Install libc6-compat for compatibility and manually install PNPM
RUN apk add --no-cache libc6-compat curl \
    && npm install -g pnpm

WORKDIR /app

# Set runtime environment variables
ENV NODE_ENV=production
ENV BASE_URL=$BASE_URL

# Create and use a non-root user for security
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy public and build artifacts from the builder stage
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Change to the non-root user
USER nextjs

# Expose the app's port
EXPOSE 3000

# Set environment variables (runtime)
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the Next.js server
CMD ["node", "server.js"]