

## Fix: Form Input Conflict

### Problem
The `FloatingInput` component in `HeroSection.tsx` receives conflicting props:
- `{...register("nome")}` -- react-hook-form's uncontrolled approach (provides `onChange`, `ref`, `name`)
- `value={nome}` -- a controlled value from `watch("nome")`

This controlled/uncontrolled conflict causes the input to behave unpredictably, especially on mobile devices. The user may be unable to type, or the input may appear to "fight" itself (appearing as if two forms are stacked).

### Solution
Switch from `register` to react-hook-form's `Controller` pattern for the inputs, making them properly controlled. This avoids the conflict entirely.

### Technical Details

**File: `src/components/HeroSection.tsx`**

1. Import `Controller` from `react-hook-form` and use `useForm`'s `control` property
2. Refactor `FloatingInput` to accept `value` and `onChange` as standard controlled props (remove `register` spread)
3. Wrap each input with `Controller` to properly bridge react-hook-form with controlled components
4. For the custom select (tipoEvento), also use `Controller` with `setValue` for clean state management
5. The textarea also needs the same Controller treatment

Key changes:
- `FloatingInput` will accept `value`, `onChange`, `onBlur` as explicit props instead of relying on register spread
- Each form field wrapped in `<Controller control={control} name="fieldName" render={({field}) => <FloatingInput {...field} />} />`
- Remove the conflicting `value={nome}` and `value={watch("dataEvento")}` explicit props since Controller handles this

This ensures a single source of truth for each input's value and eliminates the "two forms" behavior.
