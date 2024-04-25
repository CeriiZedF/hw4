import React from 'react'


function Selector() {

    function ThemeChange() {
        var element = document.body;
        element.classList.toggle("dark-mode");
        console.log(element)
      }

    return (
        <>
            <h1>Selector Theme</h1>
            <text>asdasdadasd</text>
            <br />
            <input type="checkbox" onInput={ThemeChange}/>
            <hr />
        </>
    )
}

export default Selector
