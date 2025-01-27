import InputField from "./elements/InputField"

function App(): JSX.Element {
  return (
    <>
      <h1 className=" flex items-center justify-center font-bold text-6xl text-yellow-800">Hellow </h1>
      <p>This is a pafdjnajfks</p>
      <InputField
        id="username"
        name="username"
        value=""
        onChangeInput={() => {}}
        type="text"
        placeholder="Username"
        />
        <InputField
        id="password"
        name="password"
        value="dsjkjjfn"
        onChangeInput={() => {}}
        type="password"
        placeholder="Password"
        />
    </>
  )
}

export default App
