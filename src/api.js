const API_KEY =
  "live_EaLSUfLezpLEkTa99cMwJuOtIF43kp6pRYWhOLlCVqwiIprq7k4qtXXImqjaf5ZB";

//fetching data from the Dog API
export async function fetchDogBreeds() {
  try {
    const response = await fetch("https://api.thedogapi.com/v1/breeds", {
      headers: {
        "x-api-key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch dog breeds!!");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching dog breeds:", error);
    throw error;
  }
}
