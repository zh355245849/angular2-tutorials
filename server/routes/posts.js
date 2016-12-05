const express = require('express');
const router = express.Router();
const postList = [];

function makePost(title, body) {
    return {
        title: title,
        body: body,
        id: postList.length
    };
}

//test pagination

postList.push(makePost("Eating", "Pizza is good!!"));
postList.push(makePost("travel", "Go to hiking"));
postList.push(makePost("Psion", "Joan D. Vinge"));
postList.push(makePost("American Gods", "Neil Gaiman is perfect!"));
postList.push(makePost("Harry Potter and the Philosopher's Stone", "J.K. Rowling"));

postList.push(makePost("Eating", "Pizza is good!!"));
postList.push(makePost("travel", "Go to hiking"));
postList.push(makePost("Psion", "Joan D. Vinge"));
postList.push(makePost("American Gods", "Neil Gaiman is perfect!"));
postList.push(makePost("Harry Potter and the Philosopher's Stone", "J.K. Rowling"));

postList.push(makePost("Eating", "Pizza is good!!"));
postList.push(makePost("travel", "Go to hiking"));
postList.push(makePost("Psion", "Joan D. Vinge"));
postList.push(makePost("American Gods", "Neil Gaiman is perfect!"));
postList.push(makePost("Harry Potter and the Philosopher's Stone", "J.K. Rowling"));

postList.push(makePost("Eating", "Pizza is good!!"));
postList.push(makePost("travel", "Go to hiking"));
postList.push(makePost("Psion", "Joan D. Vinge"));
postList.push(makePost("American Gods", "Neil Gaiman is perfect!"));
postList.push(makePost("Harry Potter and the Philosopher's Stone", "J.K. Rowling"));

postList.push(makePost("Eating", "Pizza is good!!"));
postList.push(makePost("travel", "Go to hiking"));
postList.push(makePost("Psion", "Joan D. Vinge"));
postList.push(makePost("American Gods", "Neil Gaiman is perfect!"));
postList.push(makePost("Harry Potter and the Philosopher's Stone", "J.K. Rowling"));

postList.push(makePost("Eating", "Pizza is good!!"));
postList.push(makePost("travel", "Go to hiking"));
postList.push(makePost("Psion", "Joan D. Vinge"));
postList.push(makePost("American Gods", "Neil Gaiman is perfect!"));
postList.push(makePost("Harry Potter and the Philosopher's Stone", "J.K. Rowling"));

router.get("/", (req, res) => {
    res.json(postList);
});

router.get("/archive/:id", (req, res) => {
    let postsRes = postList.slice(20 * req.params.id, 20 * req.params.id + 20);
    res.json(postsRes);
});

router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);

    let post = postList.filter(x => x.id === id)[0];

    if (!post) {
        res.sendStatus(404);
    } else {
        res.json(post);
    }
});

router.post("/", (req, res) => {
    console.log(req.body);
    postList.push(makePost(req.body.title, req.body.body));
});

// Capture any other uncoded routes and 404 them
router.use("*", (req, res) => {
    res.sendStatus(404);
});

module.exports = router;