module.exports = {
    config: {
        apiKey: "c2b08663-06e3-440c-ef6f-13978b42883a",
        securityKey: "f26baf68-e3a9-45fc-effe-502e47116265",
        organization_Id: "5de0387b12e200ea63204d6c",
        host: "server.cocreate.app:8088"
    },
 
    sources: [{
            path: "./docs/index.html",
            collection: "files",
            document_id: "6020ce06b526e5753d0ecb7d",
            key: "html",
            data:{
                name: "Dashboard Doc",
            }
        },
    ],
   
    crud: [{
            collection: "routes",
            document_id: "6020ce06b526e5753d0ecb7c",
            data:{
                collection: "files",
                document_id: "6020ce06b526e5753d0ecb7d",
                name: "html",
                domains: ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                route: "/docs/dashboard",
            }
        }
    ],
    
    extract: {
        directory: "./src/",
        extensions: [
            "js",
            "css",
            "html"
        ],
        ignores: [
            "node_modules",
            "vendor",
            "bower_components",
            "archive"
        ],
    }
}
