import * as React from 'react';
import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Text,
    Button,
    Hr,
    Tailwind,
} from '@react-email/components';

interface EmailVerificationTemplateProps {
    userName: string;
    verificationUrl: string;
    userEmail: string;
}

const EmailVerificationTemplate = (props: EmailVerificationTemplateProps) => {
    const { userName, verificationUrl, userEmail } = props;

    return (
        <Html lang="en" dir="ltr">
            <Tailwind>
                <Head />
                <Body className="bg-gray-100 font-sans py-[40px]">
                    <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]">
                        {/* Minimal Email Icon */}
                        <Section className="text-center mb-[32px]">
                            <div className="inline-block bg-blue-50 rounded-full p-[16px] mb-[16px]">
                                <div className="w-[32px] h-[24px] border-[2px] border-solid border-blue-500 rounded-[4px] relative">
                                    <div className="absolute top-[-2px] left-[50%] transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[6px] border-l-transparent border-r-transparent border-b-blue-500"></div>
                                </div>
                            </div>
                            <Text className="text-[28px] font-bold text-gray-900 m-0">
                                Verify Your Email
                            </Text>
                            <Text className="text-[16px] text-gray-600 mt-[8px] m-0">
                                One step closer to getting started
                            </Text>
                        </Section>

                        {/* Main Content */}
                        <Section className="mb-[32px]">
                            <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                                Hi {userName},
                            </Text>

                            <Text className="text-[16px] text-gray-700 leading-[24px] mb-[16px]">
                                Welcome! To complete your account setup and start using our platform, please verify your email address by clicking the button below.
                            </Text>

                            <Text className="text-[16px] text-gray-700 leading-[24px] mb-[24px]">
                                This verification link will expire in 24 hours for security purposes.
                            </Text>
                        </Section>

                        {/* Verification Button */}
                        <Section className="text-center mb-[32px]">
                            <Button
                                href={verificationUrl}
                                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border hover:bg-blue-700"
                            >
                                Verify Email Address
                            </Button>
                        </Section>

                        {/* Alternative Link */}
                        <Section className="mb-[32px]">
                            <Text className="text-[14px] text-gray-600 leading-[20px] text-center mb-[16px]">
                                Having trouble with the button? Copy and paste this link into your browser:
                            </Text>
                            <Text className="text-[14px] text-blue-600 leading-[20px] text-center break-all">
                                {verificationUrl}
                            </Text>
                        </Section>

                        {/* Info Notice */}
                        <Section className="bg-gray-50 border-l-[4px] border-solid border-gray-400 p-[16px] rounded-[4px] mb-[32px]">
                            <Text className="text-[14px] text-gray-700 leading-[20px] m-0">
                                <strong>Note:</strong> If you didn&apos;t create an account with us, you can safely ignore this email. No account will be created without verification.
                            </Text>
                        </Section>

                        <Hr className="border-gray-200 my-[24px]" />

                        {/* Footer */}
                        <Section className="text-center">
                            <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                                This email was sent to {userEmail}
                            </Text>
                            <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                                © {new Date().getFullYear()} Your Company Name. All rights reserved.
                            </Text>
                            <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                                123 Business Street, Suite 100, City, State 12345
                            </Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default EmailVerificationTemplate;