import { Toaster, toast } from 'sonner'
// import { BiCheck } from 'react-icons/bi'

// async function uploadSomething() {
//   const res = await fetch('https://reqres.in/api/users/1')
//   return await res.json()
//   // return new Promise((resolve) => setTimeout(resolve, 3000))
// }

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia velit
        totam aut maxime accusamus et facilis, odit, magnam autem consequatur,
        earum minima pariatur dicta ea rem. Aliquam inventore nulla deleniti?
      </p>
      <button
        onClick={() => {
          // toast('Terminos aceptados', {
          //   description: 'Gracias por aceptar los terminos y condiciones',
          //   icon: <BiCheck style={{ color: 'green', fontSize: "1rem" }} />,
          // })
          // toast.success('Todo correcto')
          // toast.error('Algo salio mal')
          // toast('Quieres aceptar los terminos y condiciones?', {
          //   action: {
          //     label: 'Aceptar',
          //     onClick: () => {
          //       toast.success('Terminos aceptados')
          //     },
          //   }
          // })
          // toast.promise(uploadSomething(), {
          //   loading: 'Subiendo archivo...',
          //   success: ({ data }) => {
          //     console.log(data)
          //     return `Bienvenido ${data.first_name} ${data.last_name}`
          //   },
          //   error: 'Error al subir el archivo',
          // })
          // toast(
          //   <div>
          //     <h3>Hello world</h3>
          //     <p>Algo nuevo</p>
          //     <ul>
          //       <li>algo nuevo</li>
          //       <li>otra cosa</li>
          //     </ul>
          //   </div>
          // )
          const toastId = toast('Sonner')
          setTimeout(() => {
            toast.success('Gracias por acepetar los terminos y condiciones', {
              id: toastId,
            })
          }, 1000)
        }}
      >
        Aceptar
      </button>
      <Toaster
        theme='dark'
        position='top-center'
        dir='auto'
        visibleToasts={5}
        duration={1500}
        closeButton
        richColors      />
    </div>
  )
}
