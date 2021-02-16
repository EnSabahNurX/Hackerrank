let btn = document.createElement('button')
btn.id = 'btn'
btn.className = "btnClass";
btn.innerHTML = '0'
btn.style.height = '48px'
btn.style.width = '96px'
btn.style.fontSize = '24px'
document.body.appendChild(btn)

// // button.addEventListener('click', () => button.innerHTML = (Number(button.innerHTML) + 1).toString())

// btn.onclick = () => btn.innerHTML = (Number(btn.innerHTML) + 1).toString()

btn.onclick = () => btn.innerHTML++

    /*
    Complete the code in the editor so that it creates a clickable button satisfying the following properties:

        The button's id is btn.
        The button's initial text label is

    . After each click, the button must increment by
    . Recall that the button's text label is the JS object's innerHTML property.
    The button has the following style properties:

        A width of 96px.
        A height of 48px.
        The font-size attribute is 24px.
    */