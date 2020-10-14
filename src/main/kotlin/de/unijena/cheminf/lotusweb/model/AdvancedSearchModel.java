package de.unijena.cheminf.lotusweb.model;

import net.minidev.json.JSONObject;

public class AdvancedSearchModel {

    JSONObject [] listOfSearchItems;

    public JSONObject[] getListOfSearchItems() {
        return listOfSearchItems;
    }

    public void setListOfSearchItems(JSONObject[] listOfSearchItems) {
        this.listOfSearchItems = listOfSearchItems;
    }




}
