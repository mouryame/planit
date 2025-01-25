import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

interface AnimatedModalProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}
export default function AnimatedModal({
  trigger,
  children,
  footer,
}: AnimatedModalProps) {
  return (
    <Modal>
      <ModalTrigger>{trigger}</ModalTrigger>
      <ModalBody>
        <ModalContent>{children}</ModalContent>
        <ModalFooter>{footer}</ModalFooter>
      </ModalBody>
    </Modal>
  );
}
