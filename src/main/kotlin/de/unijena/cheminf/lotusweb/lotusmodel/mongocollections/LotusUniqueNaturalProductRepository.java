package de.unijena.cheminf.lotusweb.lotusmodel.mongocollections;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path="compound")
public interface LotusUniqueNaturalProductRepository  extends MongoRepository<LotusUniqueNaturalProduct, String>, LotusUniqueNaturalProductRepositoryCustom{

    public List<LotusUniqueNaturalProduct> findBySmiles(String smiles);

    public List<LotusUniqueNaturalProduct> findByInchi(String inchi);

    public List<LotusUniqueNaturalProduct> findByInchikey(String inchikey);

    public List<LotusUniqueNaturalProduct> findAllByOrderByAnnotationLevelDesc();

    @Query("{ lotus_id : ?0}")
    public List<LotusUniqueNaturalProduct> findByLotus_id(String lotus_id);

    @Query("{ clean_smiles : ?0}")
    public List<LotusUniqueNaturalProduct> findByClean_smiles(String clean_smiles);

    @Query("{ unique_smiles : ?0}")
    public List<LotusUniqueNaturalProduct> findByUnique_smiles(String unique_smiles);

    @Query("{molecular_formula : ?0}")
    public List<LotusUniqueNaturalProduct> findByMolecular_formula(String molecular_formula);


    public List<LotusUniqueNaturalProduct> findByName(String name);


    @Query("{molecular_weight : ?0}")
    public List<LotusUniqueNaturalProduct> findByMolecular_weight(String weight);


    @Query("{ $text: { $search: ?0 } }")
    public List<LotusUniqueNaturalProduct> fuzzyNameSearch(String name);


    @Query("{ npl_noh_score: { $exists:false } }")
    List<LotusUniqueNaturalProduct> findAllByNPLScoreComputed();

    @Query("{ apol: { $exists:false } }")
    List<LotusUniqueNaturalProduct> findAllByApolComputed();

    @Query(value="{ pubchemBits : { $bitsAllSet : ?0  }}", fields = "{ _id:0,lotus_id: 1, unique_smiles:1, clean_smiles:1, molecular_formula:1, molecular_weight:1, npl_score:1 , name:1, smiles:1, total_atom_number:1}" )
    List<LotusUniqueNaturalProduct> findAllPubchemBitsSet(byte[] querybits) ;


    @Query("{ $or: [ {chemicalClass: ?0}, {chemicalSubClass: ?0}, {chemicalSuperClass: ?0}, {directParentClassification: ?0}  ] }")
    List<LotusUniqueNaturalProduct> findByChemclass(String query);
}
