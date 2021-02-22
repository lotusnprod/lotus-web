package de.unijena.cheminf.lotusweb.lotusmodel.mongocollections;

import java.util.Hashtable;

public class UnifiedTaxonomyReferenceObject {


    String doi;
    String title;

    public Hashtable<String, TaxonomyReferenceObject> db2taxonomies;

    public UnifiedTaxonomyReferenceObject(String doi, String title) {
        this.doi = doi;
        this.title = title;

        this.db2taxonomies = new Hashtable<>();
    }

    public String getDoi() {
        return doi;
    }

    public void setDoi(String doi) {
        this.doi = doi;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Hashtable<String, TaxonomyReferenceObject> getDb2taxonomies() {
        return db2taxonomies;
    }

    public void setDb2taxonomies(Hashtable<String, TaxonomyReferenceObject> db2taxonomies) {
        this.db2taxonomies = db2taxonomies;
    }

    //ArrayList<ArrayList<String>> taxonomy;
    // 0: DB (organism_taxo_db)
    // 1: cleaned_organism_id : the id of the organism that will link out

    // 2: organism_value : the "name of the organism to link out

    // 3: organism_url : the URL to link out: need to create this one, depending on the DB & the id

    // 4 -> ... other ranks, in order


    //    String cleaned_organism_id;
    //
    //    String organism_taxo_db;
    //
    //    String organism_value;
    //
    //    String organism_url;
}
