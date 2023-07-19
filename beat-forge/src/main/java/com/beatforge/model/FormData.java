package com.beatforge.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FormData {
    @JsonProperty("artist")
    private String artist;

    @JsonProperty("vibe")
    private String vibe;

    @JsonProperty("bpmEnabled")
    private boolean bpmEnabled;

    @JsonProperty("keyEnabled")
    private boolean keyEnabled;

    @JsonProperty("bpm")
    private int bpm;

    @JsonProperty("scale")
    private String scale;

    @JsonProperty("note")
    private String note;

    public String getArtist() {
        return artist;
    }

    public String getVibe() {
        return vibe;
    }

    public boolean isBpmEnabled() {
        return bpmEnabled;
    }

    public boolean isKeyEnabled() {
        return keyEnabled;
    }

    public int getBpm() {
        return bpm;
    }

    public String getScale() {
        return scale;
    }

    public String getNote() {
        return note;
    }
}
