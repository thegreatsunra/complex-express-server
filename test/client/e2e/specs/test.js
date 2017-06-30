import { Selector } from 'testcafe'

fixture `Getting Started`
  .page `http://localhost:3000`

const title = Selector('.title')
const description = Selector('.description')

test('Title', async test => {
  await test
  .expect(title.innerText).eql('Your basic express server is working!', 'Title contains the correct text')
})

test('Description', async test => {
  await test
  .expect(description.innerText).eql('Now get out there and build something great!', 'Description contains the correct text')
})
