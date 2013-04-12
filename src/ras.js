module.exports = {
    datacite: {
        name: "DataCite",
        fullname : "DataCite",
        scope: "research data",
        url: "http://www.datacite.org",
        servers: [ "0.SERV/10.TIB", "0.SERV/10.ETH", "0.SERV/10.tib" ],
        conneg: [
            "application/rdf+xml",
            "text/turtle",
            "application/vnd.citationstyles.csl+json",
            "text/x-bibliography",
            "application/x-research-info-systems",
            "application/x-bibtex",
            "application/vnd.datacite.datacite+xml"
        ]
    },
    crossref: {
        name: "CrossRef",
        fullname: "CrossRef",
        scope: "journal articles, books, conference proceedings, etc.",
        url: "http://www.crossref.org",
        servers: [ "0.SERV/10.crossref" ],
        conneg: [
            "application/rdf+xml",
            "text/turtle",
            "application/vnd.citationstyles.csl+json",
            "text/x-bibliography",
            "application/x-research-info-systems",
            "application/x-bibtex",
            "application/vnd.crossref.unixref+xml"
        ]
    },
    medra: {
        name: "mEDRA",
        fullname: "multilingual European Registration Agency of DOI",
        scope: "intellectual property in digital networks",
        url: "http://www.medra.org",
        servers: [ "0.SERV/10.MEDRA", "0.SERV/10.medra" ]
    }
}
