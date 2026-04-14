
export const GOOGLE_SHEETS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyfKeaEV2wxzyRJt_VzoucyIGVpg8Y9hAQTjzLT95vSr9usOZjueTTw1cQdTk3uWera/exec";

export interface FormData {
  type: 'quote' | 'contact';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  product?: string;
  requirement?: string;
  message?: string;
}

export async function submitToGoogleSheets(data: FormData) {
  if (!GOOGLE_SHEETS_SCRIPT_URL || GOOGLE_SHEETS_SCRIPT_URL.includes("YOUR_GOOGLE_SCRIPT_URL_HERE")) {
    console.warn("Google Sheets Script URL not set. Data not sent:", data);
    return { success: false, message: "Google Sheets Script URL not configured." };
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // Required for Google Apps Script web apps
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // With no-cors, we can't read the response body, but if it doesn't throw, it's usually successful
    return { success: true };
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return { success: false, error };
  }
}
