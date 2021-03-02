package de.unijena.cheminf.lotusweb.lotusmodel.mongocollections;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path="compound")
public interface LotusUniqueNaturalProductRepository  extends MongoRepository<LotusUniqueNaturalProduct, String>, LotusUniqueNaturalProductRepositoryCustom{

    @Query("{$or:[ {smiles: ?0}, {smiles2D : ?0}]}")
    public List<LotusUniqueNaturalProduct> findBySmiles2DOrSmiles (String smiles);

    @Query("{$or:[ {inchi: ?0}, {inchi2D : ?0}]}")
    public List<LotusUniqueNaturalProduct> findByInchiOrInchi2D(String inchi);

    @Query("{$or:[ {inchikey: ?0}, {inchikey2D : ?0}]}")
    public List<LotusUniqueNaturalProduct> findByInchikeyOrInchikey2D(String inchikey);


    @Query("{ lotus_id : ?0}")
    public List<LotusUniqueNaturalProduct> findByLotus_id(String lotus_id);

    public List<LotusUniqueNaturalProduct> findBySmiles2D(String smiles2d);

    public List<LotusUniqueNaturalProduct> findBySmiles(String smiles3d);

    @Query("{molecular_formula : ?0}")
    public List<LotusUniqueNaturalProduct> findByMolecular_formula(String molecular_formula);

    @Query("{traditional_name : ?0}")
    public List<LotusUniqueNaturalProduct> findByTraditionalName(String name);


    @Query("{molecular_weight : ?0}")
    public List<LotusUniqueNaturalProduct> findByMolecular_weight(String weight);


    @Query("{ $text: { $search: ?0 } }")
    public List<LotusUniqueNaturalProduct> fuzzyNameSearch(String name);


    @Query("{ npl_noh_score: { $exists:false } }")
    List<LotusUniqueNaturalProduct> findAllByNPLScoreComputed();

    @Query("{ apol: { $exists:false } }")
    List<LotusUniqueNaturalProduct> findAllByApolComputed();

    @Query(value="{ pubchemBits : { $bitsAllSet : ?0  }}", fields = "{ _id:0,lotus_id: 1, smiles:1, smiles2D:1, molecular_formula:1, molecular_weight:1, npl_score:1 , traditional_name:1,  total_atom_number:1}" )
    List<LotusUniqueNaturalProduct> findAllPubchemBitsSet(byte[] querybits) ;


    /*@Query("{ $or: [ {chemicalClass: ?0}, {chemicalSubClass: ?0}, {chemicalSuperClass: ?0}, {directParentClassification: ?0}  ] }")
    List<LotusUniqueNaturalProduct> findByChemclass(String query);*/
}
