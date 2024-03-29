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
    },
    airiti: {
        name: "Airity",
        fullname: "Airity, Inc.",
        scope: "traditional Chinese materials",
        url: "http://doi.airiti.com",
        servers: [ "0.SERV/10.AIRITI" ]
    },
    jalc: {
        name: "JaLC",
        fullname: "Japan Link Center",
        scope: "scientific and academic metadata and content from holders in Japan",
        servers: [ "0.SERV/10.JALC" ]
    },
    opoce: {
        name: "OPOCE",
        fullname: "Office des publications EU",
        scope: "publications of all European Union entities",
        url: "http://www.publications.eu.int/",
        servers: [ "0.SERV/10.OPOCE" ]
    },
    eidr: {
        name: "EIDR",
        fullname: "Entertainment Identifier Registry",
        scope: "movies, television shows, and other commercial audio/video assets",
        url: "http://eidr.org",
        servers: [ "0.NA/10.5240" ]
    },
    idf: {
        name: "IDF",
        fullname: "Internationl DOI Foundation",
        scope: "general IDF stuff, also serving Bowker and others",
        url: "http://doi.org",
        servers: [ "0.SERV/10" ]
    },
    istic: {
        name: "ISTIC",
        fullname: "The Institute of Scientific and Technical Information of China",
        scope: "Chinese journals, dissertations, books, conference proceedings and other literature resources, and management of scientific data sets, multi-media resources such as audio/video in China",
        url: "http://www.doi.org.cn",
        servers: [ "0.SERV/10.wfd", "0.SERV/wfd" ]
    },
    nbd: {
        name: "NBD",
        fullname: "Nielsen BookData",
        scope: "books (?)",
        comment: "discontinued",
        url: "http://www.doi.nielsenbookdata.co.uk",
        servers: [ "0.SERV/10.NBDRS" ]
    },
    tso: {
        name: "TSO",
        fullname: "The Stationery Office",
        comment: "transferred to Niels BookData",
        servers: [ "0.SERV/10.TSO" ]
    }
}
