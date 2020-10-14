package de.unijena.cheminf.lotusweb.controller


import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class HtmlController {

    @GetMapping(
            "/*",
            "/browser/*",
            "/search/*",
            "/search/simple/*",
            "/compound/{identifier:smiles|inchi|inchikey|lotus_id|id}/{identifierValue}")
    fun index(): String {
        return "index"
    }

}
