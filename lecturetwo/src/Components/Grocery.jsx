const Grocery = ()=>{
    return (
        <>
            <h1> This is a testing page to learn lazy loading:  </h1>
            <h2>Divide our js file from bundler</h2>
            <hr />
            <p>NOTES :::::::::: System Design Interview ::::::::::
                Suppose we are making an e-commerce website , and there is
                to section one is all electronics and others and another is
                grocery so in that case if we don't use lazy loading then 
                our app will get very slow. bascially in any large project
                if have to use lazy loading to make our app fast. bascially 
                dividing our bundler js from one js file to multiple,
               :: go to network tab to see how it's working.
            </p>
            <hr/>
        </>
    )
}

export default Grocery;