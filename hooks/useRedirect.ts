import { useStore } from "@/store/useStore";
import { useStoreLogin } from "@/store/useStoreLogin";
import { useStoreExtraction } from "@/store/useStoreExtraction";
import { useRouter } from "next/router";
import { useStoreModal } from "@/store/useStoreModal";

export const useRedirect = () => {
  const router = useRouter();
  const { setInitialState } = useStore();
  const { setInitialState: setInitialStateLogin } = useStoreLogin();
  const { setInitialState: setInitialStateExtraction } = useStoreExtraction();
  const { setActive } = useStoreModal();

  const handleRedirect = (path: String, cancel?: boolean) => {
    if (cancel) {
      setInitialState();
      setInitialStateLogin();
      setInitialStateExtraction();
    }
    setActive({ isActive: false });
    router.push(path);
  };
  return {
    handleRedirect,
  };
};
