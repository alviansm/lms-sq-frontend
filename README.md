Live demo: [https://lms-sq-frontend.vercel.app/](https://lms-sq-frontend.vercel.app/)

Main features & ToDos:

`*Front end slicing*`
- [ ] Create quiz *MVP*
  - [ ] Create
  - [ ] Read
  - [ ] Update
  - [ ] Delete
- [ ] Create course *MVP*
  - [ ] Create
  - [ ] Read
  - [ ] Update
  - [ ] Delte
- [ ] Participate in quiz *MVP*
  - [ ] Information page (`quiz setting`, `captcha`, `navigation`) // note: bug on `token` and `user agreement` nav button logic
  - [ ] Start quiz
    - [ ] Countdown time
      - [ ] Auto-close on countdown
    - [ ] Navigation between quiz
      - [ ] Save progress on localstorage
    - [ ] Mark component rendering
  - [ ] Reports after completing a quiz
    - [ ] Share
    - [ ] Save
- [ ] Participate in class

`*Back end development*`
- [ ] Soon

`*Back end + front end integration*`
- [ ] Soon

## User flow

.
└── Beranda <br>
    ├── Add // `create quiz` and `create course` features <br>
    │   ├── Quiz <br>
    │   │   └── [slug] <br>
    │   │       └── [id] <br>
    │   └── Course <br>
    │       └── [slug] <br>
    │           └── [id] <br>
    ├── Quiz <br>
    │   ├── [slug] <br>
    │   └── Ongoing <br>
    │       └── [slug] <br>
    └── Course <br>
        └── [slug] <br>
            └── Ongoing <br>
                └── [slug] <br>

## Dependency

## Acknowledgement

## ToDoS
`26-11-2023 / 4th week of November`:
- [ ] Add slug in quiz edit page, then fix navigation from `add/quiz` to more specific slug `add/quiz/precalculus-trigonometry` when editing specific questions
- [ ] Document setting modal
- [ ] Add question modal
- [ ] Edit question in details, to new page similiar to `ongoing` page with editable question and answer. User could select question category and the display adjust it. (Multiple choice, short form, essay, etc.). User could add image, table, graph, or Latex.
- [ ] Delete question, react-flowbite modal form (provide API request code comment and client-side quick rendering)
- [ ] Delete question, react-flowbite modal form
