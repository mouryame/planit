import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-screen h-screen justify-center">
      <Modal>
        <ModalTrigger>
          <div>Hello</div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h1>Hello World</h1>
          </ModalContent>
          <ModalFooter>Footer</ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
