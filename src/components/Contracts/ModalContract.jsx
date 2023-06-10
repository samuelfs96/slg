import { Modal } from 'flowbite-react'
import React, { useEffect } from 'react'

const ModalContract = ({
    show,
    onClose,
    contractData
}) => {
  useEffect(() =>{
    console.log(contractData)
  }, [contractData])
  return (
    <Modal
        show={show}
        onClose={onClose}
        size="7xl"
    >
        <Modal.Header>
            Contrato
        </Modal.Header>
        <Modal.Body>
            {
                contractData && (
                    <div className="space-y-6 overflow-auto max-h-[500px]">
                        <p className="text-base leading-relaxed text-sgl-gray font-light">
                            <span className='font-bold'>Nombre del contrato:</span> {contractData?.name}
                        </p>
                        <p className="text-base leading-relaxed text-sgl-gray font-light">
                            <span className='font-bold'>Plazo de Ejecución:</span> {contractData?.term}
                        </p>
                        <p className="text-base leading-relaxed text-sgl-gray font-light">
                            <span className='font-bold'>Tiempo de Ejecución:</span> {contractData?.time}
                        </p>
                        <p className="text-base leading-relaxed text-sgl-gray font-light">
                            <span className='font-bold'>Cliente:</span> {contractData?.customer}
                        </p>
                        <p className="text-base leading-relaxed text-sgl-gray font-light">
                            <span className='font-bold'>Monto del Contrato:</span> {contractData?.ammount}
                        </p>
                        <p className="text-base leading-relaxed text-sgl-gray font-light">
                            <span className='font-bold'>Descripción de los Trabajos:</span> {contractData?.description}
                        </p>
                        <div className="gap-4 container flex justify-center max-[580px]:flex-col">
                            <div className='h-[300px] w-1/3 max-[780px]:h-auto max-[780px]:w-1/2 max-[580px]:w-full'>
                                <img className='h-full w-full' src={contractData?.images[0]} alt={`c${contractData?.id}-1`}/>
                                <h2 className='p-2 text-white bg-sgl-black text-center'>Antes</h2>
                            </div>
                            <div className='h-[300px] w-1/3 max-[780px]:h-auto max-[780px]:w-1/2 max-[580px]:w-full'>
                                <img className='h-full w-full' src={contractData?.images[1]} alt={`c${contractData?.id}-2`}/>
                                <h2 className='p-2 text-white bg-sgl-black text-center'>Después</h2>
                            </div>
                            
                        </div>
                    </div>
                )
            }
        </Modal.Body>
    </Modal>
  )
}

export default ModalContract