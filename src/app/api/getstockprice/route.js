



// define area

var res;

async function GET(request) {

    const searchParams = request.nextUrl.searchParams
    const stock = searchParams.get('stock')

    

    switch (stock) {
        case "ICICI":
            // code block

            var min = 946.00; // Replace with your desired minimum value
            var max = 954.99; // Replace with your desired maximum value
            var randomDecimal = parseFloat((Math.random() * (max - min) + min).toFixed(2));

            res = {
                name: stock,
                price: randomDecimal
            }

            break;
        case "HDFC":
            // code block

            var min = 1520.00; // Replace with your desired minimum value
            var max = 1540.99; // Replace with your desired maximum value
            var randomDecimal = parseFloat((Math.random() * (max - min) + min).toFixed(2));

            res = {
                name: stock,
                price: randomDecimal
            }
            break;
            case "Axis":
                // code block
    
                var min = 990.00; // Replace with your desired minimum value
                var max = 1000.99; // Replace with your desired maximum value
                var randomDecimal = parseFloat((Math.random() * (max - min) + min).toFixed(2));
    
                res = {
                    name: stock,
                    price: randomDecimal
                }
                break;
        default:
            // code block
            res = {
               msg:"Invalid Stock Name "
            }
    }

    return Response.json(res)
}



// export area
module.exports = { GET }

