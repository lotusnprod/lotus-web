package de.unijena.cheminf.lotusweb.lotusmodel.mongocollections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.data.mongodb.core.aggregation.GroupOperation;

import java.util.List;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.group;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;

public class LOTUSSourceNaturalProductRepositoryImpl implements LOTUSSourceNaturalProductRepositoryCustom {

    private final MongoTemplate mongoTemplate;

    @Autowired
    public LOTUSSourceNaturalProductRepositoryImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }


    @Override
    public List<String> findUniqueInchiKeys(){

        GroupOperation groupByInchikey = group("simpleInchiKey");

        Aggregation aggregation = newAggregation(groupByInchikey);
        AggregationResults<String> groupResults = mongoTemplate.aggregate(aggregation, "lOTUSSourceNaturalProduct", String.class);

        List<String> result =  groupResults.getMappedResults();

        return result;
    }
    /*public List<Object> findUniqueInchiKeys() {
        return mongoTemplate.query(LOTUSSourceNaturalProduct.class).distinct("simpleInchiKey").all()  ;
    }*/

    @Override
    public List<Object> findUniqueSourceNames(){
        return mongoTemplate.query(LOTUSSourceNaturalProduct.class).distinct("source").all() ;
    }


}
