package de.unijena.cheminf.lotusweb.lotusmodel.mongocollections;

public class UncomplicatedTaxonomy {

    String cleaned_organism_id;

    String organism_value;

    String organism_url;



    String domain = null;

    String superkingdom = null;

    String kingdom = null;

    String phylum = null;

    String classx = null;

    String order = null;

    String family = null;

    String genus = null;

    String species = null;


    public UncomplicatedTaxonomy() {
    }


    public String getCleaned_organism_id() {
        return cleaned_organism_id;
    }

    public void setCleaned_organism_id(String cleaned_organism_id) {
        this.cleaned_organism_id = cleaned_organism_id;
    }

    public String getOrganism_value() {
        return organism_value;
    }

    public void setOrganism_value(String organism_value) {
        this.organism_value = organism_value;
    }

    public String getOrganism_url() {
        return organism_url;
    }

    public void setOrganism_url(String organism_url) {
        this.organism_url = organism_url;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }

    public String getSuperkingdom() {
        return superkingdom;
    }

    public void setSuperkingdom(String superkingdom) {
        this.superkingdom = superkingdom;
    }

    public String getKingdom() {
        return kingdom;
    }

    public void setKingdom(String kingdom) {
        this.kingdom = kingdom;
    }

    public String getPhylum() {
        return phylum;
    }

    public void setPhylum(String phylum) {
        this.phylum = phylum;
    }

    public String getClassx() {
        return classx;
    }

    public void setClassx(String classx) {
        this.classx = classx;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public String getFamily() {
        return family;
    }

    public void setFamily(String family) {
        this.family = family;
    }

    public String getGenus() {
        return genus;
    }

    public void setGenus(String genus) {
        this.genus = genus;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }
}
