package com.beatforge.service;

import java.io.IOException;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.beatforge.model.FormData;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

@Service
public class OpenAIService {

    @Value("${openai.api.key}")
    private String apiKey;

    OkHttpClient client = new OkHttpClient();

    public String generateTemplate(FormData body) {
        String bpm = body.isBpmEnabled() ? String.valueOf(body.getBpm()) : "";
        String key = body.isKeyEnabled() ? body.getNote() + " " + body.getScale() : "";

        String template = String.format(
                "Pretend you are %s, I'm creating a new beat with a %s sound. Please give me a template of how you would start the beat. Give the answer in this format and the whole answer should only be in this format, but dont include quotation marks in the answer:{\n"
                        +
                        "artist: %s,\n" +
                        "vibe: %s,\n" +
                        "bpm: %s **if bpm is blank, generate the field yourself with what's reasonable with the artist and vibe, otherwise use given BPM**,\n"
                        +
                        "key: %s **if key is blank, generate the field yourself with what's reasonable with the artist and vibe**,\n"
                        +
                        "chordProgression: **Make the progression interesting! Also, specify the chord progression in notes (\"F, Fm\" just for example but just make sure it is just the symbol like Cm instead of C Minor) for the key that the beat should be in (whether generated or given). And give it in correct order. Feel free to use a common chord progression in the key generated above. Return this value in an array format []**,\n"
                        +
                        "bars: **Specify the number of bars based on the chord progression given (most likely 4)**,\n" +
                        "timing: **Specify the length of each chord using subdivisions.  The number represents the subdivision. \"t\" represents a triplet. A \".\" add a half. e.g. \"4n\" is a quarter note (which is one fourth of a whole measure), \"4t\" is a quarter note triplet, and \"4n.\" is a dotted quarter note. “2n” is for a half note, “8n” is an eighth note and so on. 1m is the whole measure which is the standard for what we want for the timing as a chord is typically played for a bar”...\n"
                        +
                        "Please note that the timing of the chords should align with the specified number of bars and they should all add up to be the length of the number of bars(measures, which is typically 4 which would take 1m, 1m, 1m, 1m typically but try to be creative and make it that, just make sure it adds up to the equivalent), and you can use a combination of subdivisions to create variation and match the desired artistic style. Also return in an array**\n"
                        +
                        "}\n" +
                        "Any comments between ** symbols are comments and should be considered when returning the answer.\n"
                        +
                        "Don't give me an introduction just return the answer in the format how I listed. Also, give me an exact answer and don't give me an explanation, for example for BPM just give me a bpm to use and don't give me a reason in ().  Keep the number of chords in the progression the same as the number of bars\n"
                        +
                        "Can you return it so that it is in a JSON object format, ONLY THE OBJECT NOTHING ELSE. That means that key and values should have quotation marks and there should be a comma separating each key and value pair.\n",
                body.getArtist(), body.getVibe(), body.getArtist(), body.getVibe(), bpm, key);

        return template;
    }

    public String callOpenAI(FormData body) throws IOException {
        String template = generateTemplate(body);

        // Create a JSON object for the request body
        String json = new JSONObject()
                .put("model", "text-davinci-003")
                .put("prompt", template)
                .put("max_tokens", 200)
                .put("temperature", 0.6)
                .toString();

        MediaType JSON = MediaType.get("application/json; charset=utf-8");
        RequestBody requestBody = RequestBody.create(json, JSON);

        Request request = new Request.Builder()
                .url("https://api.openai.com/v1/completions")
                .addHeader("Authorization", "Bearer " + apiKey)
                .addHeader("Content-Type", "application/json")
                .post(requestBody)
                .build();

        try (Response response = client.newCall(request).execute()) {
            String responseBody = response.body().string();
            JSONObject responseJson = new JSONObject(responseBody);
            JSONArray choices = responseJson.getJSONArray("choices");
            if (choices.length() > 0) {
                JSONObject choice = choices.getJSONObject(0);
                String text = choice.getString("text");
                return text;
            }
        }

        return "";
    }

}
