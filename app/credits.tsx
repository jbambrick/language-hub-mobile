import { Image } from 'expo-image';
import { Text, View } from 'react-native';
import Background from './background';
import config from './config.json';
import { creditsScreen, homeScreen } from './styles';

export default function CreditsScreen() {
    const contributions = config.credits;

    return (
        <Background>
            <View style={[creditsScreen.page]}>
                <Text
                    selectable={true}
                    style={[creditsScreen.text]}
                    allowFontScaling={false}
                >
                    {contributions}
                </Text>
            </View>
            <View style={[homeScreen.footer]}>
                <Text style={[homeScreen.footerText]} allowFontScaling={false}>
                    A project built on the
                    <View
                        style={{
                            justifyContent: 'center',
                            alignSelf: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={{
                                uri: config.coscradLogoUrl,
                            }}
                            alt="Coscrad"
                            contentFit="cover"
                            style={[homeScreen.coscradImage]}
                            contentPosition={'bottom'}
                            allowDownscaling={false}
                        />
                    </View>
                    platform.
                </Text>
            </View>
        </Background>
    );
}
