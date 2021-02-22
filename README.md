
# LOTUS web 



docker exec -it npoc-mongo-db bash

mongo --port 27019
use NPOC2021
db.dropDatabase()
exit

cd mongodata/NPOC2021/NPOC2021/
mongorestore --port 27019 --db=NPOC2021 --noIndexRestore .

mongo --port 27019
use NPOC2021

db.lotusUniqueNaturalProduct.createIndex( {inchi:"hashed"})
db.lotusUniqueNaturalProduct.createIndex( {inchikey:1})
db.lotusUniqueNaturalProduct.createIndex( {smiles: "hashed"})
db.lotusUniqueNaturalProduct.createIndex( {inchi2D:"hashed"})
db.lotusUniqueNaturalProduct.createIndex( {inchikey2D:1})
db.lotusUniqueNaturalProduct.createIndex( {smiles2D: "hashed"})
db.lotusUniqueNaturalProduct.createIndex( {molecular_formula:1})
db.lotusUniqueNaturalProduct.createIndex( {lotus_id:1})
db.lotusUniqueNaturalProduct.createIndex( {fragmentsWithSugar:"hashed"})
db.lotusUniqueNaturalProduct.createIndex( {fragments:"hashed"})


db.runCommand(
  {
    createIndexes: 'lotusUniqueNaturalProduct',
    indexes: [
        {
            key: {
                iupac_name:"text", traditional_name:"text", allTaxa:"text"
            },
            name: "superTextIndex",
	    weights: { name:10, synonyms:5  }
        }

    ]
  }
)




db.lotusUniqueNaturalProduct.createIndex( {npl_score:1})

db.lotusUniqueNaturalProduct.createIndex( { pubchemBits : "hashed" } )


db.lotusUniqueNaturalProduct.createIndex( {deep_smiles: "hashed"})
db.lotusUniqueNaturalProduct.createIndex( { "pfCounts.bits" :1} )
db.lotusUniqueNaturalProduct.createIndex( { "pfCounts.count" : 1 })


