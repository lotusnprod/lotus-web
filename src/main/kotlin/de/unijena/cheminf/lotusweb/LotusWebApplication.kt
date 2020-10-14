package de.unijena.cheminf.lotusweb

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories

@SpringBootApplication
@EnableMongoRepositories("de.unijena.cheminf.lotusweb.lotusmodel.mongocollections")
class LotuSwebApplication


internal var DATA_DIR: String = "./data/"


fun main(args: Array<String>) {

    System.setProperty("org.apache.tomcat.util.buf.UDecoder.ALLOW_ENCODED_SLASH", "true")
    DATA_DIR = "./data/"


    runApplication<LotuSwebApplication>(*args)
}
