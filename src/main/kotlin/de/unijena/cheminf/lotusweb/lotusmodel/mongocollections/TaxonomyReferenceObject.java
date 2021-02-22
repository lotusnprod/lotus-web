package de.unijena.cheminf.lotusweb.lotusmodel.mongocollections;

import org.springframework.data.annotation.Id;

public class TaxonomyReferenceObject {

    @Id
    String id;

    String cleaned_organism_id;

    String organism_taxo_db;

    String organism_value;

    String organism_url;


    String ranks;

    String all_taxonomy;




    String referenceDOI;

    String referenceTitle;



    String domain = null;

    String superkingdom = null;

    String kingdom = null;

    String phylum = null;

    String classx = null;

    String order = null;

    String family = null;

    String genus = null;

    String species = null;




    public TaxonomyReferenceObject() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getOrganism_taxo_db() {
        return organism_taxo_db;
    }

    public void setOrganism_taxo_db(String organism_taxo_db) {
        this.organism_taxo_db = organism_taxo_db;
    }

    public String getRanks() {
        return ranks;
    }

    public void setRanks(String ranks) {
        this.ranks = ranks;
    }

    public String getAll_taxonomy() {
        return all_taxonomy;
    }

    public void setAll_taxonomy(String all_taxonomy) {
        this.all_taxonomy = all_taxonomy;
    }

    public String getReferenceDOI() {
        return referenceDOI;
    }

    public void setReferenceDOI(String referenceDOI) {
        this.referenceDOI = referenceDOI;
    }

    public String getReferenceTitle() {
        return referenceTitle;
    }

    public void setReferenceTitle(String referenceTitle) {
        this.referenceTitle = referenceTitle;
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

    public String getOrganism_url() {
        return organism_url;
    }

    public void setOrganism_url(String organism_url) {
        this.organism_url = organism_url;
    }

    /*


    String reference_wd;

    String reference_doi;

    String reference_title;


    String unique_name;

    String wd_taxon;

    String taxon_name;

    String taxon_id_gbif;

    String taxon_id_ncbi;

    String ott_link;

    String ott_id;


    String name_domain;

    String unique_name_domain;

    String ott_id_domain;


    String name_kingdom;

    String unique_name_kingdom;

    String ott_id_kingdom;


    String name_phylum;

    String unique_name_phylum;

    String ott_id_phylum;


    String name_class;

    String unique_name_class;

    String ott_id_class;


    String name_order;

    String unique_name_order;

    String ott_id_order;


    String name_family;

    String unique_name_family;

    String ott_id_family;


    String name_genus;

    String unique_name_genus;

    String ott_id_genus;


    String name_species;

    String unique_name_species;

    String ott_id_species;


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getReference_wd() {
        return reference_wd;
    }

    public void setReference_wd(String reference_wd) {
        this.reference_wd = reference_wd;
    }

    public String getReference_doi() {
        return reference_doi;
    }

    public void setReference_doi(String reference_doi) {
        this.reference_doi = reference_doi;
    }

    public String getReference_title() {
        return reference_title;
    }

    public void setReference_title(String reference_title) {
        this.reference_title = reference_title;
    }

    public String getUnique_name() {
        return unique_name;
    }

    public void setUnique_name(String unique_name) {
        this.unique_name = unique_name;
    }

    public String getWd_taxon() {
        return wd_taxon;
    }

    public void setWd_taxon(String wd_taxon) {
        this.wd_taxon = wd_taxon;
    }

    public String getTaxon_name() {
        return taxon_name;
    }

    public void setTaxon_name(String taxon_name) {
        this.taxon_name = taxon_name;
    }

    public String getTaxon_id_gbif() {
        return taxon_id_gbif;
    }

    public void setTaxon_id_gbif(String taxon_id_gbif) {
        this.taxon_id_gbif = taxon_id_gbif;
    }

    public String getTaxon_id_ncbi() {
        return taxon_id_ncbi;
    }

    public void setTaxon_id_ncbi(String taxon_id_ncbi) {
        this.taxon_id_ncbi = taxon_id_ncbi;
    }

    public String getOtt_link() {
        return ott_link;
    }

    public void setOtt_link(String ott_link) {
        this.ott_link = ott_link;
    }

    public String getOtt_id() {
        return ott_id;
    }

    public void setOtt_id(String ott_id) {
        this.ott_id = ott_id;
    }

    public String getName_domain() {
        return name_domain;
    }

    public void setName_domain(String name_domain) {
        this.name_domain = name_domain;
    }

    public String getUnique_name_domain() {
        return unique_name_domain;
    }

    public void setUnique_name_domain(String unique_name_domain) {
        this.unique_name_domain = unique_name_domain;
    }

    public String getOtt_id_domain() {
        return ott_id_domain;
    }

    public void setOtt_id_domain(String ott_id_domain) {
        this.ott_id_domain = ott_id_domain;
    }

    public String getName_kingdom() {
        return name_kingdom;
    }

    public void setName_kingdom(String name_kingdom) {
        this.name_kingdom = name_kingdom;
    }

    public String getUnique_name_kingdom() {
        return unique_name_kingdom;
    }

    public void setUnique_name_kingdom(String unique_name_kingdom) {
        this.unique_name_kingdom = unique_name_kingdom;
    }

    public String getOtt_id_kingdom() {
        return ott_id_kingdom;
    }

    public void setOtt_id_kingdom(String ott_id_kingdom) {
        this.ott_id_kingdom = ott_id_kingdom;
    }

    public String getName_phylum() {
        return name_phylum;
    }

    public void setName_phylum(String name_phylum) {
        this.name_phylum = name_phylum;
    }

    public String getUnique_name_phylum() {
        return unique_name_phylum;
    }

    public void setUnique_name_phylum(String unique_name_phylum) {
        this.unique_name_phylum = unique_name_phylum;
    }

    public String getOtt_id_phylum() {
        return ott_id_phylum;
    }

    public void setOtt_id_phylum(String ott_id_phylum) {
        this.ott_id_phylum = ott_id_phylum;
    }

    public String getName_class() {
        return name_class;
    }

    public void setName_class(String name_class) {
        this.name_class = name_class;
    }

    public String getUnique_name_class() {
        return unique_name_class;
    }

    public void setUnique_name_class(String unique_name_class) {
        this.unique_name_class = unique_name_class;
    }

    public String getOtt_id_class() {
        return ott_id_class;
    }

    public void setOtt_id_class(String ott_id_class) {
        this.ott_id_class = ott_id_class;
    }

    public String getName_order() {
        return name_order;
    }

    public void setName_order(String name_order) {
        this.name_order = name_order;
    }

    public String getUnique_name_order() {
        return unique_name_order;
    }

    public void setUnique_name_order(String unique_name_order) {
        this.unique_name_order = unique_name_order;
    }

    public String getOtt_id_order() {
        return ott_id_order;
    }

    public void setOtt_id_order(String ott_id_order) {
        this.ott_id_order = ott_id_order;
    }

    public String getName_family() {
        return name_family;
    }

    public void setName_family(String name_family) {
        this.name_family = name_family;
    }

    public String getUnique_name_family() {
        return unique_name_family;
    }

    public void setUnique_name_family(String unique_name_family) {
        this.unique_name_family = unique_name_family;
    }

    public String getOtt_id_family() {
        return ott_id_family;
    }

    public void setOtt_id_family(String ott_id_family) {
        this.ott_id_family = ott_id_family;
    }

    public String getName_genus() {
        return name_genus;
    }

    public void setName_genus(String name_genus) {
        this.name_genus = name_genus;
    }

    public String getUnique_name_genus() {
        return unique_name_genus;
    }

    public void setUnique_name_genus(String unique_name_genus) {
        this.unique_name_genus = unique_name_genus;
    }

    public String getOtt_id_genus() {
        return ott_id_genus;
    }

    public void setOtt_id_genus(String ott_id_genus) {
        this.ott_id_genus = ott_id_genus;
    }

    public String getName_species() {
        return name_species;
    }

    public void setName_species(String name_species) {
        this.name_species = name_species;
    }

    public String getUnique_name_species() {
        return unique_name_species;
    }

    public void setUnique_name_species(String unique_name_species) {
        this.unique_name_species = unique_name_species;
    }

    public String getOtt_id_species() {
        return ott_id_species;
    }

    public void setOtt_id_species(String ott_id_species) {
        this.ott_id_species = ott_id_species;
    }
    */
}
