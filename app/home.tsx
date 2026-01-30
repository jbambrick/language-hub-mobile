import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Image } from 'expo-image';
import {
    Pressable,
    ScrollView,
    Text,
    useWindowDimensions,
    View,
} from 'react-native';
import Background from './background';
import config from './config.json';
import { alphabetButton, homeScreen } from './styles';

export default function HomeScreen() {
    const appName = config.appName;
    const alphabetLanguage = config.language;
    const navigation =
        useNavigation<NativeStackNavigationProp<ParamListBase>>();

    const { width, height } = useWindowDimensions();

    return (
        <Background>
            <View style={[homeScreen.background]}>
                <ScrollView>
                    <View>
                        <Image
                            contentFit="contain"
                            priority={'high'}
                            source={require('../assets/images/tng_icon_semi-reversed.webp')}
                            style={[
                                homeScreen.homeImage,
                                { marginTop: width > height ? 0 : 110 },
                                { width: width > height ? 100 : 150 },
                                { height: width > height ? 100 : 150 },
                            ]}
                        />
                        <Text
                            style={[
                                homeScreen.appTitle,
                                { margin: width > height ? 0 : 20 },
                            ]}
                            allowFontScaling={false}
                        >
                            {appName}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={[
                                homeScreen.tagline,
                                { margin: width > height ? 10 : 38 },
                            ]}
                            allowFontScaling={false}
                        >
                            Explore the {appName}. Learn {alphabetLanguage}{' '}
                            letters, words, and pronounciation with audio.
                        </Text>
                    </View>

                    <View
                        style={[
                            homeScreen.button,
                            {
                                width: width > height ? '40%' : '80%',
                                borderWidth: 1,
                                borderColor: 'black',
                            },
                        ]}
                    >
                        <Pressable
                            testID="Menu"
                            onPress={() => navigation.navigate('Menu')}
                        >
                            <Text
                                style={alphabetButton.alphabetName}
                                allowFontScaling={false}
                            >
                                Alphabet
                            </Text>
                        </Pressable>
                    </View>

                    <View
                        style={[
                            homeScreen.button,
                            {
                                width: width > height ? '40%' : '80%',
                                backgroundColor: 'transparent',
                                elevation: 0,
                                shadowOpacity: 0,
                                borderWidth: 2,
                                borderColor: 'white',
                            },
                        ]}
                    >
                        <Pressable
                            testID="Credits"
                            android_ripple={null}
                            onPress={() => navigation.navigate('Credits')}
                        >
                            <Text
                                style={alphabetButton.credits}
                                allowFontScaling={false}
                            >
                                Credits
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </View>
        </Background>
    );
}
