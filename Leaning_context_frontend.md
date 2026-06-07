# Learning Context

# Current Goal

Become interview-ready Full Stack + AI Developer.

Main Focus:

* React
* DSA
* Node.js
* PostgreSQL
* AI Integration

Long-Term Goal:
* Strong React mental models
* Production-level component architecture
* AI-integrated full stack projects
* FAANG-level frontend engineering skills

---

# Current Progress

## React

* useState ✅
* useEffect ✅
* useRef ✅
* controlled vs uncontrolled components ✅
* refs array handling ✅
* focus management ✅
* event handling fundamentals ✅
* functional state updates ✅
* prop drilling ✅
* lifting state up ✅
* state ownership fundamentals ✅
* parent-child data flow ✅
* callback props ✅
* stale closures ⚠️
* component architecture ⚠️
* reconciliation ❌
* useMemo ❌
* useCallback ❌
* context API ❌
* custom hooks ❌
* reducer pattern ❌
* render optimization ❌

## DSA

* Arrays ✅
* HashMap ⚠️
* Sliding Window ❌
* Two Pointer ❌
* Recursion ❌

---

# Current Projects

## OTP Component

Learned:

* refs
* array of refs
* controlled inputs
* focus management
* keyboard events
* input navigation
* DOM node handling
* dynamic focus movement
* ref.current mental model
* controlled input synchronization

Pending:

* paste OTP
* arrow navigation
* backspace edge cases
* mobile OTP UX
* auto-submit after completion

Architecture Learned:

* useRef for DOM access
* useState for UI state
* refs do not trigger render
* controlled input flow
* React overwrites ref.current when attached to JSX ref

---

## Todo App

Planned Features:

* add todo
* delete todo
* edit todo
* filters
* localStorage
* dark mode
* search
* task completion toggle
* task counter
* clear completed

Architecture:
TodoApp
├── Header
│     └── AddItem
├── TodoList
│     └── TodoItem
└── TodoStats

Architecture Concepts Learned:

* parent owns shared state
* lifting state up
* props flow downward
* callback functions flow upward
* derived state
* single responsibility components
* state ownership
* local vs shared state
* prop drilling
* parent passes actions to children
* child requests parent updates through callbacks

---

# Important Mental Models

## useState

State updates trigger re-render.

State updates are asynchronous.

React batches updates in same execution cycle.

Functional updates are needed when next state depends on previous state.

State should live:
* as low as possible
* as high as necessary

---

## useEffect

Runs after render.

Used for side effects:
* API calls
* timers
* subscriptions
* DOM synchronization

Infinite loops happen when effect updates dependency repeatedly.

useEffect itself does NOT trigger render automatically.
State updates inside effect may trigger render.

---

## useRef

Stores mutable values without re-render.

Can store:
* DOM elements
* previous values
* timers
* flags

If attached to JSX ref:
React overwrites `.current` with DOM node after mount.

Changing `ref.current` does NOT trigger render.

---

## Controlled Inputs

React state is source of truth.

Flow:
type
↓
browser updates temporary DOM
↓
onChange fires
↓
setState
↓
re-render
↓
value prop syncs UI

Preferred for:
* validation
* predictable state
* form control
* synchronization

---

## Uncontrolled Inputs

DOM/browser is source of truth.

Refs read values directly from DOM.

Typing does not trigger React render.

---

## Event Handling

`e.target`
→ actual element that triggered event

`e.currentTarget`
→ element whose handler is running

`e.target.value`
→ value from event-triggering element

`ref.current.value`
→ value directly from DOM node

---

## Rendering Mental Model

React function component runs again on re-render.

Re-render ≠ full page refresh.

State changes trigger re-render.

Ref changes do NOT trigger re-render.

React synchronizes UI from state after render.

---

## React Data Flow

Data:
Parent → Child
through props

Actions:
Child → Parent
through callback functions

Child does NOT directly modify parent state.

Child requests parent updates by calling parent callbacks.

---

# Mistakes I Made

* mutating state directly
* misunderstanding controlled inputs
* using `e.value` instead of `e.target.value`
* manually changing DOM in controlled inputs
* misunderstanding stale closures
* confusing ref updates with state updates
* mixing controlled and uncontrolled behavior
* misunderstanding callback prop execution scope

---

# Current Confusions

* reconciliation
* cleanup functions
* useMemo vs useCallback
* Context API
* reducer pattern
* render optimization
* React rendering internals
* stale closures in async callbacks
* React reconciliation process

---

# Interview Questions To Revise

* Why does useRef not re-render?
* Why use functional updates?
* What causes infinite loops in useEffect?
* Difference between controlled and uncontrolled components?
* Why should shared state live in parent component?
* Difference between e.target and e.currentTarget?
* Why are controlled components preferred in React?
* Why does changing ref.current not update UI?
* What is derived state?
* What is stale closure?
* What is prop drilling?
* What is lifting state up?
* Why should state stay as low as possible?
* Why does child not directly update parent state?

---

# Current Learning Level

## Strong Areas

* React fundamentals
* hooks basics
* rendering mental models
* event handling
* controlled inputs
* state ownership thinking
* lifting state up
* prop drilling understanding
* debugging curiosity

## Improving Areas

* architecture scaling
* advanced hooks
* optimization
* async mental models
* React internals
* performance thinking

---

# Learning Strategy

Focus Order:

1. Finish Todo App properly
2. Learn component architecture deeply
3. Learn Context API
4. Learn reconciliation + render cycle deeply
5. Learn useMemo/useCallback
6. Learn custom hooks
7. Start backend integration
8. Build full-stack projects

---

# Important Personal Observation

Strong debugging curiosity.

Learns by asking:
* WHY render happens
* WHY browser behaves differently
* WHY React synchronization works
* WHY state should live in certain component

Transitioning from:
React syntax learner
→
React mental model learner
→
React architecture learner