
const body = React.createElement("div",{
    id:"parent"
},[React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"heading1"},"Hi my name is Sujith BN"),
    React.createElement("h1",{id:"heading2"},"Hi my name is Samarth BN")
    ]
),
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{id:"heading1"},"Hi my name is Sujith BN"),
    React.createElement("h1",{id:"heading2"},"Hi my name is Samarth BN")
    ]
)
])



console.log(body)
const root = ReactDOM.createRoot(document.getElementById("groot"))

root.render(body)
