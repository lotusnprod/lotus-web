package de.unijena.cheminf.lotusweb.lotusmodel.mongocollections;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(path="source")
public interface LOTUSSourceNaturalProductRepository extends MongoRepository<LOTUSSourceNaturalProduct, String>, LOTUSSourceNaturalProductRepositoryCustom {


    List<LOTUSSourceNaturalProduct> findByInchikey3D(String inchikey);

}
