from starlette.applications import Starlette
from starlette.responses import UJSONResponse
import uvicorn
import random

app = Starlette()

fortunes  = [
	"大吉",
	"吉",
	"中吉",
	"小吉",
	"末吉",
	"凶",
	"大凶",
]


@app.route('/api/fortune')
async def homepage(request):
    return UJSONResponse({'result': random.choice(fortunes)})

if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)