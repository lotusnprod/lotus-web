package de.unijena.cheminf.lotusweb.lotusmodel.mongocollections;

import de.unijena.cheminf.lotusweb.lotusmodel.mongocollections.TaxonomyReferenceObject;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.temporal.TemporalAccessor;
import java.util.ArrayList;
import java.util.Hashtable;


@Document
public class LOTUSSourceNaturalProduct {

    @Id
    public String id;

    public String smiles3d;

    public String smiles2d;

    public String absoluteSmiles;

    public String inchi3D;

    public String inchi2D;

    public String inchikey3D;

    public String inchikey2D;


    public String cas;

    public Integer heavyAtomNumber;

    public Integer totalAtomNumber;


    public String comment;

    public String acquisition_date;

    public LotusUniqueNaturalProduct lotusUniqueNaturalProduct;

    public TaxonomyReferenceObject taxonomyReferenceObject;

    public String traditionalName;

    public String iupacName;

    public ArrayList<String> synonyms;

    public String linkToWDstructure;

    public Hashtable<String, String> xrefs;


    //Constructor
    public LOTUSSourceNaturalProduct() {
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSmiles3d() {
        return smiles3d;
    }

    public void setSmiles3d(String smiles3d) {
        this.smiles3d = smiles3d;
    }

    public String getSmiles2d() {
        return smiles2d;
    }

    public void setSmiles2d(String smiles2d) {
        this.smiles2d = smiles2d;
    }

    public String getAbsoluteSmiles() {
        return absoluteSmiles;
    }

    public void setAbsoluteSmiles(String absoluteSmiles) {
        this.absoluteSmiles = absoluteSmiles;
    }

    public String getInchi3D() {
        return inchi3D;
    }

    public void setInchi3D(String inchi3D) {
        this.inchi3D = inchi3D;
    }

    public String getInchi2D() {
        return inchi2D;
    }

    public void setInchi2D(String inchi2D) {
        this.inchi2D = inchi2D;
    }

    public String getInchikey3D() {
        return inchikey3D;
    }

    public void setInchikey3D(String inchikey3D) {
        this.inchikey3D = inchikey3D;
    }

    public String getInchikey2D() {
        return inchikey2D;
    }

    public void setInchikey2D(String inchikey2D) {
        this.inchikey2D = inchikey2D;
    }

    public String getCas() {
        return cas;
    }

    public void setCas(String cas) {
        this.cas = cas;
    }

    public Integer getHeavyAtomNumber() {
        return heavyAtomNumber;
    }

    public void setHeavyAtomNumber(Integer heavyAtomNumber) {
        this.heavyAtomNumber = heavyAtomNumber;
    }

    public Integer getTotalAtomNumber() {
        return totalAtomNumber;
    }

    public void setTotalAtomNumber(Integer totalAtomNumber) {
        this.totalAtomNumber = totalAtomNumber;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getAcquisition_date() {
        return acquisition_date;
    }

    public void setAcquisition_date(String acquisition_date) {
        this.acquisition_date = acquisition_date;
    }

    public LotusUniqueNaturalProduct getLotusUniqueNaturalProduct() {
        return lotusUniqueNaturalProduct;
    }

    public void setLotusUniqueNaturalProduct(LotusUniqueNaturalProduct lotusUniqueNaturalProduct) {
        this.lotusUniqueNaturalProduct = lotusUniqueNaturalProduct;
    }

    public TaxonomyReferenceObject getTaxonomyReferenceObject() {
        return taxonomyReferenceObject;
    }

    public void setTaxonomyReferenceObject(TaxonomyReferenceObject taxonomyReferenceObject) {
        this.taxonomyReferenceObject = taxonomyReferenceObject;
    }

    public String getTraditionalName() {
        return traditionalName;
    }

    public void setTraditionalName(String traditionalName) {
        this.traditionalName = traditionalName;
    }

    public String getIupacName() {
        return iupacName;
    }

    public void setIupacName(String iupacName) {
        this.iupacName = iupacName;
    }

    public ArrayList<String> getSynonyms() {
        return synonyms;
    }

    public void setSynonyms(ArrayList<String> synonyms) {
        this.synonyms = synonyms;
    }

    public String getLinkToWDstructure() {
        return linkToWDstructure;
    }

    public void setLinkToWDstructure(String linkToWDstructure) {
        this.linkToWDstructure = linkToWDstructure;
    }

    public Hashtable<String, String> getXrefs() {
        return xrefs;
    }

    public void setXrefs(Hashtable<String, String> xrefs) {
        this.xrefs = xrefs;
    }
}