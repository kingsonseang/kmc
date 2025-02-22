import { NextRequest } from "next/server";
import QRCode from "qrcode";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ _id: string }> }
) {
  const _id = (await params)._id;

  if (!_id) {
    return new Response("Missing ID parameter", { status: 400 });
  }

  try {
    // Generate QR code as Data URL (Base64)
    const qrcode = await QRCode.toDataURL(_id, {
      errorCorrectionLevel: "M",
    });

    if (!qrcode) {
      return new Response("Failed to generate data url", { status: 400 });
    }

    // Extract Base64 string from Data URL (remove `data:image/png;base64,`)
    const base64Data = qrcode.replace(/^data:image\/png;base64,/, "");

    // Convert Base64 to Buffer
    const buffer = Buffer.from(base64Data, "base64");

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png", // PNG is the correct format
      },
    });
  } catch (error) {
    console.log(error);
    return new Response("Failed to generate QR code", { status: 500 });
  }
}
