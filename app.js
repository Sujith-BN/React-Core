import React from "react"
import ReactDOM from "react-dom/client"

const body = React.createElement("div",{
    id:"parent"
},[React.createElement("div",{id:"child",key:"c1"},[
    React.createElement("h1",{id:"heading1",key:"he1"},"Hi my name is Sujith BN"),
    React.createElement("h1",{id:"heading2",key:"he2"},"Hi my name is Samarth BN")
    ]
),
    React.createElement("div",{id:"child2",key:"c2"},[
    React.createElement("h1",{id:"heading1",key:"he3"},"Hi my name is Sujith BN"),
    React.createElement("h1",{id:"heading2",key:"he4"},"Hi my name is Samarth BN")
    ]
)
])




console.log(body)
const root = ReactDOM.createRoot(document.getElementById("groot"))

root.render(body)
