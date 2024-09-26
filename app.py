from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000)
