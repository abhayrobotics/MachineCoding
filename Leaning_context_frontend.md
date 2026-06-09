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
* localStorage persistence ✅
* multiple useEffect architecture ✅
* state synchronization mental model ✅
* hydration mental model ✅
* immutable update mental model ⚠️
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
* React state as source of truth
* localStorage as persistence layer
* synchronization through effects
* hydration from external storage
* edit mode controlled through shared parent state
* reusable input component architecture
* update flow through parent callbacks

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

React state should remain the source of truth for UI.

State updates do NOT happen immediately after `setState`.

Reading state immediately after `setState` may still show old value.

---

## useEffect

Runs after render.

Effects execute top-to-bottom in declaration order.

Used for side effects:

* API calls
* timers
* subscriptions
* DOM synchronization
* localStorage synchronization

Infinite loops happen when effect updates dependency repeatedly.

useEffect itself does NOT trigger render automatically.

State updates inside effect may trigger render.

One effect should ideally represent one synchronization concern.

Multiple useEffects are GOOD when responsibilities are separate.

Async code inside one effect does NOT block other effects.

Effects from same render cycle run independently.

Non-async effects still execute sequentially in declaration order.

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

`useRef("ABHAY")` is valid.

If attached to JSX ref:
initial value gets overwritten by React DOM node reference.

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

Controlled input UI updates because React re-renders with updated state.

---

## Uncontrolled Inputs

DOM/browser is source of truth.

Refs read values directly from DOM.

Typing does not trigger React render.

Useful for:

* simple forms
* uncontrolled libraries
* direct DOM access cases

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

`e.current.value`
is usually undefined.

Correct React event usage:
`e.currentTarget.value`

---

## Rendering Mental Model

React function component runs again on re-render.

Re-render ≠ full page refresh.

State changes trigger re-render.

Ref changes do NOT trigger re-render.

React synchronizes UI from state after render.

Effects run AFTER render commit phase.

React render:

* calculates UI
* compares previous UI
* updates only changed parts

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

Lifting state up:
move shared state to closest common parent.

Props drilling:
passing props through many intermediate components.

---

## localStorage Mental Model

localStorage stores ONLY strings.

Need:

* JSON.stringify before saving
* JSON.parse after reading

Correct architecture:

localStorage
↓
hydrate React state
↓
React state controls UI
↓
UI updates from state
↓
useEffect synchronizes localStorage

React state = active working memory

localStorage = persistent backup storage

localStorage should NOT replace React state.

JSON.parse can fail if:

* invalid JSON
* undefined string
* corrupted storage value

---

## Synchronization Mental Model

State is source of truth.

Effects synchronize external systems.

Examples:

* APIs
* localStorage
* timers
* subscriptions
* DOM APIs

One effect = one synchronization concern.

Effects should synchronize external systems with React state.

---

## Immutable Update Mental Model

React prefers immutable updates.

Avoid mutating existing objects or arrays directly.

Wrong:

```js id="imh100"
item.todo = data
```

Correct:

```js id="imh101"
return {
   ...item,
   todo: data
}
```

Why immutable updates matter:

* predictable rendering
* safer state updates
* React optimization compatibility
* easier debugging
* reference change detection

`map()` creates a NEW array.

Inside `map()`:

* return updated copy for changed item
* return original item for unchanged items

Mutating objects directly can create:

* stale UI bugs
* unpredictable renders
* debugging difficulty

---

# Mistakes I Made

* mutating state directly
* mutating nested objects during map updates
* misunderstanding controlled inputs
* using `e.value` instead of `e.target.value`
* using `classname` instead of `className`
* manually changing DOM in controlled inputs
* misunderstanding stale closures
* confusing ref updates with state updates
* mixing controlled and uncontrolled behavior
* misunderstanding callback prop execution scope
* parsing invalid localStorage data
* misunderstanding effect execution order
* assuming state updates immediately after setState
* misunderstanding immutable updates inside map()
* using splice directly on state arrays
* assuming async effect blocks other effects

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
* Strict Mode double effect execution

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
* Why should localStorage not replace React state?
* Why split logic into multiple useEffects?
* When do useEffects execute?
* Why can JSON.parse fail with localStorage?
* What does hydration mean in React?
* Why should React state updates be immutable?
* Why is direct object mutation dangerous in React?
* Why does React prefer immutable updates?
* Why should one effect represent one synchronization concern?

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
* synchronization architecture basics
* debugging curiosity
* parent-child data flow understanding

## Improving Areas

* immutable update habits
* architecture scaling
* advanced hooks
* optimization
* async mental models
* React internals
* performance thinking
* reconciliation understanding
* render propagation understanding

---

# Learning Strategy

Focus Order:

1. Finish Todo App properly
2. Master immutable update patterns
3. Learn component architecture deeply
4. Learn Context API
5. Learn reconciliation + render cycle deeply
6. Learn useMemo/useCallback
7. Learn custom hooks
8. Start backend integration
9. Build full-stack projects

---

# Important Personal Observation

Strong debugging curiosity.

Learns by asking:

* WHY render happens
* WHY browser behaves differently
* WHY React synchronization works
* WHY state should live in certain component
* WHY effects execute in certain order
* WHY immutable updates matter
* WHY React prefers predictable state flow

Transitioning from:

React syntax learner
→
React mental model learner
→
React architecture learner
→
React synchronization thinker
→
React state management thinker
