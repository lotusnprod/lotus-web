package de.unijena.cheminf.lotusweb.lotusmodel.mongocollections;

import de.unijena.cheminf.lotusweb.model.AdvancedSearchModel;
import org.openscience.cdk.interfaces.IAtomContainer;

import java.util.ArrayList;
import java.util.List;

public interface LotusUniqueNaturalProductRepositoryCustom {


    List<LotusUniqueNaturalProduct> advancedSearchWithCriteria (AdvancedSearchModel criterias, Integer maxResults);

    List<LotusUniqueNaturalProduct> similaritySearch(ArrayList<Integer> reqbits, ArrayList<Integer> qfp, Integer qmin, Integer qmax, Integer qn, Double threshold, Integer maxResults );


    List<LotusUniqueNaturalProduct> minMaxMolecularWeightSearch(Double minMolecularWeight, Double maxMolecularWeight, Integer maxResults);

    List<LotusUniqueNaturalProduct> minMolecularWeightSearch(Double minMolecularWeight, Integer maxResults);

    List<LotusUniqueNaturalProduct> maxMolecularWeightSearch(Double maxMolecularWeight, Integer maxResults);

    List<LotusUniqueNaturalProduct> findBySmiles2DOrSmilesAndTaxonomy (String smiles,  String intaxonomy);

    List<LotusUniqueNaturalProduct> doExactStructureSearchByInchiAndTaxonomy (String inchi,  String intaxonomy);

    List<LotusUniqueNaturalProduct> findAllPubchemBitsSetWithTaxonomy(IAtomContainer queryAC, String intaxonomy) ;

    List<LotusUniqueNaturalProduct> similaritySearchInTaxa(ArrayList<Integer> reqbits, ArrayList<Integer> qfp, Integer qmin, Integer qmax, Integer qn, Double threshold, Integer maxResults, String intaxa );
}
