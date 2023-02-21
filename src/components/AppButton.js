import { TouchableOpacity, ActivityIndicator } from "react-native";

const AppButton = ({
  children,
  isLoading,
  transparent,
  className,
  ...rest
}) => {
  const style = transparent ? "bg-transparent" : "bg-primary-700";

  return (
    <TouchableOpacity
      className={`w-full h-[58px] flex flex-row items-center justify-center py-[10px] rounded-[8px] ${className}`}
      {...rest}
    >
      {isLoading ? <ActivityIndicator size="small" color="white" /> : children}
    </TouchableOpacity>
  );
};

export default AppButton;
