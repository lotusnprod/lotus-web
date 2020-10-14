package de.unijena.cheminf.lotusweb.lotusmodel.mongocollections;

import java.util.List;

public interface LOTUSSourceNaturalProductRepositoryCustom {

    List<String> findUniqueInchiKeys();

    List<Object> findUniqueSourceNames();

}
