from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

# Datos de ejemplo de productos
productos = [
    {"id": 1, "name": "Labial Rojo", "price": 9.99, "image": "product1.jpg"},
    {"id": 2, "name": "Sombra de Ojos", "price": 19.99, "image": "product2.jpg"},
    {"id": 3, "name": "Base de Maquillaje", "price": 29.99, "image": "product3.jpg"},
]

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/productos')
def productos():
    return render_template('productos.html', productos=productos)

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

@app.route('/api/cart', methods=['POST'])
def add_to_cart():
    cart_item = request.json
    # Aquí podrías gestionar el carrito en el servidor si es necesario
    return jsonify(cart_item), 201

if __name__ == '__main__':
    app.run(debug=True)
