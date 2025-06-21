import * as React from 'react';
import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Link,
    Button,
    Hr,
    Tailwind,
} from '@react-email/components';

interface ForgotPasswordEmailProps {
    resetUrl: string;
    userEmail: string;
}

const ForgotPasswordEmail = (props: ForgotPasswordEmailProps) => {
    const { resetUrl, userEmail } = props;

    return (
        <Html lang="en" dir="ltr">
            <Tailwind>
                <Head />
                <Body className="bg-gray-100 font-sans py-[40px]">
                    <Container className="bg-white rounded-[8px] shadow-lg max-w-[600px] mx-auto p-[40px]">
                        {/* Header */}
                        <Section className="text-center mb-[32px]">
                            <Text className="text-[32px] font-bold text-gray-900 m-0">
                                Reset Your Password
                            </Text>
                        </Section>

                        {/* Main Content */}
                        <Section className="mb-[32px]">
                            <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                                Hi there,
                            </Text>

                            <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                                We received a request to reset the password for your account associated with <strong>{userEmail}</strong>.
                            </Text>

                            <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                                Click the button below to create a new password. This link will expire in 24 hours for security reasons.
                            </Text>
                        </Section>

                        {/* Reset Button */}
                        <Section className="text-center mb-[32px]">
                            <Button
                                href={resetUrl}
                                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border hover:bg-blue-700"
                            >
                                Reset Password
                            </Button>
                        </Section>

                        {/* Alternative Link */}
                        <Section className="mb-[32px]">
                            <Text className="text-[14px] text-gray-600 leading-[20px] m-0 mb-[8px]">
                                If the button doesn&apos;t work, copy and paste this link into
                                your browser:
                            </Text>
                            <Link
                                href={resetUrl}
                                className="text-blue-600 text-[14px] break-all"
                            >
                                {resetUrl}
                            </Link>
                        </Section>

                        {/* Security Notice */}
                        <Section className="mb-[32px]">
                            <Text className="text-[14px] text-gray-600 leading-[20px] mb-[16px]">
                                <strong>Security Notice:</strong> If you didn&apos;t request this password reset, please ignore this email. Your password will remain unchanged.
                            </Text>

                            <Text className="text-[14px] text-gray-600 leading-[20px]">
                                For your security, this link will expire in 24 hours. If you need to reset your password after that, please request a new reset link.
                            </Text>
                        </Section>

                        <Hr className="border-gray-200 my-[24px]" />

                        {/* Footer */}
                        <Section className="text-center">
                            <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                                © {new Date().getFullYear()} Your Company Name. All rights reserved.
                            </Text>
                            <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                                123 Business Street, Suite 100, City, State 12345
                            </Text>
                            <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                                If you have questions, contact us at support@yourcompany.com
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

ForgotPasswordEmail.PreviewProps = {
    username: "yanguasamir05@gmail.com",
    token: "https://yourapp.com/reset-password?token=abc123",
};

export default ForgotPasswordEmail;