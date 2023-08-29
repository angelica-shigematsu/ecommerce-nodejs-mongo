import { app } from "../../server";
import request from "supertest"; 

test("Post / - test product controller", () => {
  return request(app)
    .post('/product')
    .send({ description: 'Mandala Colorida',
            stock: 3,
            price: 38.0,
            typeProduct: 'Mandala',
            photo_link: 'mandala.link',
            active: true
          })
    .then( res => {
      expect(res.status).toEqual(201)
    })
});

test('should able to return all products by type', async function() {
    const response = await request(app)
      .get('/product')
      .set('Accept', 'application/json')
    expect(response.status).toEqual(200);
  });