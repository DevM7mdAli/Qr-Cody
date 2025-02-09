import cn from "@/lib/utils";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

const RootSafeView = ({ children, className, ...props }: SafeAreaViewProps) => {
  return (
    <SafeAreaView className={cn("bg-primary", className)} {...props}>
      {children}
    </SafeAreaView>
  );
};

export default RootSafeView;