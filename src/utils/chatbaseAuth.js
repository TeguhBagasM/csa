import crypto from "crypto";

export const generateChatbaseHash = (userId) => {
  const secret = "t6gtdhxgjt4oxieiopp4oolgj3gl01r0"; // Secret key Anda
  return crypto.createHmac("sha256", secret).update(userId).digest("hex");
};
