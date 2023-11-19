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
└── Beranda
    ├── Add // `create quiz` and `create course` features
    │   ├── Quiz
    │   │   └── [slug]
    │   │       └── [id]
    │   └── Course
    │       └── [slug]
    │           └── [id]
    ├── Quiz
    │   ├── [slug]
    │   └── Ongoing
    │       └── [slug]
    └── Course
        └── [slug]
            └── Ongoing
                └── [slug]

## Dependency

## Acknowledgement